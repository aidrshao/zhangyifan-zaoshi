import { sql } from "@vercel/postgres";

async function testDatabase() {
  console.log("🔍 测试数据库连接...\n");

  try {
    const result = await sql`SELECT NOW() as now`;
    console.log("✅ 数据库连接成功！");
    console.log(`   服务器时间: ${result.rows[0].now}\n`);

    console.log("📋 检查 leads 表是否存在...");
    const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'leads'
      );
    `;
    
    if (tableCheck.rows[0].exists) {
      console.log("✅ leads 表已存在\n");
      
      console.log("📊 查询现有数据...");
      const leads = await sql`SELECT * FROM leads ORDER BY created_at DESC LIMIT 5`;
      console.log(`   共 ${leads.rowCount} 条记录\n`);
      
      if (leads.rows.length > 0) {
        console.log("最近 5 条记录：");
        leads.rows.forEach((lead, i) => {
          console.log(`   ${i + 1}. ${lead.name} - ${lead.company || '无公司'} - ${lead.created_at}`);
        });
      }
    } else {
      console.log("⚠️  leads 表不存在，正在创建...\n");
      
      await sql`
        CREATE TABLE IF NOT EXISTS leads (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          company VARCHAR(200),
          stage VARCHAR(100),
          requirement VARCHAR(200),
          message TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `;
      console.log("✅ leads 表创建成功！\n");
    }

    console.log("🧪 测试插入数据...");
    const testResult = await sql`
      INSERT INTO leads (name, company, stage, requirement, message)
      VALUES ('测试用户', '测试公司', '测试阶段', '测试需求', '这是一条测试数据')
      RETURNING *
    `;
    console.log("✅ 插入成功！");
    console.log(`   ID: ${testResult.rows[0].id}`);
    console.log(`   姓名: ${testResult.rows[0].name}`);
    console.log(`   时间: ${testResult.rows[0].created_at}\n`);

    console.log("🎉 所有测试通过！数据库工作正常。\n");
    
  } catch (error) {
    console.error("❌ 数据库测试失败：", error);
    process.exit(1);
  }

  process.exit(0);
}

testDatabase();
