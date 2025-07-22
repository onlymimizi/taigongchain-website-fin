import React from 'react'

const Verifier: React.FC = () => {
  return (
    <section className="py-16 bg-dark text-light">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">NFT 验证功能</h2>
        <p className="text-gray mb-4">（功能待开发：输入 CID 或地址，查询链上信息）</p>
        <input
          type="text"
          placeholder="输入 CID 或地址"
          className="w-full md:w-1/2 bg-darker border border-gray/30 text-light px-4 py-2 rounded-lg"
        />
        <button className="btn btn-primary mt-4">
          <i className="fas fa-search"></i> 验证
        </button>
      </div>
    </section>
  )
}

export default Verifier
