import React from 'react'

const Dashboard: React.FC = () => {
  return (
    <section className="py-16 bg-darker text-light">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <i className="fas fa-trophy text-water-blue"></i> 提交比赛成绩
        </h2>
        <p className="text-gray mb-4">（功能待接入：表单 + 图片上传 + 状态追踪）</p>
        <div className="bg-dark border border-gray/20 rounded-lg p-6">
          {/* 表单组件占位 */}
          <p>表单功能开发中...</p>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
