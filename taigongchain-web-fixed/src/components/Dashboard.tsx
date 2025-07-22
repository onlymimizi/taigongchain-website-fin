import React, { useState } from 'react'

export default function Dashboard() {
  const [photo, setPhoto] = useState<File | null>(null)
  const [preview, setPreview] = useState<string>('')
  const [status, setStatus] = useState<string>('填写比赛成绩信息')
  const [txHash, setTxHash] = useState<string>('')
  const [tokenId, setTokenId] = useState<number | null>(null)

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      setPhoto(file)
      const reader = new FileReader()
      reader.onload = () => setPreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('正在上传照片到 IPFS...')
    await new Promise(r => setTimeout(r, 1500))

    setStatus('生成元数据中...')
    await new Promise(r => setTimeout(r, 1000))

    setStatus('提交区块链交易...')
    await new Promise(r => setTimeout(r, 2000))

    setStatus('交易已确认')
    setTxHash('0x4a7e1c...b82f1d')
    setTokenId(Math.floor(Math.random() * 10000))
  }

  return (
    <div className="container dashboard">
      <div className="panel">
        <h2 className="panel-title"><i className="fas fa-trophy"></i> 提交比赛成绩</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>参赛者姓名</label>
            <input type="text" required className="form-control" />
          </div>
          <div className="form-group">
            <label>鱼种</label>
            <select required className="form-control">
              <option value="">请选择</option>
              <option value="bass">鲈鱼</option>
              <option value="carp">鲤鱼</option>
              <option value="trout">鳟鱼</option>
              <option value="salmon">三文鱼</option>
              <option value="catfish">鲶鱼</option>
            </select>
          </div>
          <div className="form-group">
            <label>重量 (kg)</label>
            <input type="number" min="0.1" step="0.1" required className="form-control" />
          </div>
          <div className="form-group">
            <label>比赛名称</label>
            <input type="text" required className="form-control" />
          </div>
          <div className="form-group">
            <label>上传照片</label>
            <input type="file" accept="image/*" onChange={handlePhotoChange} className="form-control" />
            {preview && <img src={preview} alt="预览" style={{ marginTop: '10px', maxWidth: '100px' }} />}
          </div>
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> 提交成绩到区块链
          </button>
        </form>
      </div>

      <div className="panel">
        <h2 className="panel-title"><i className="fas fa-sync-alt"></i> 上链状态</h2>
        <p>{status}</p>
        {txHash && (
          <div className="transaction-info">
            <p>交易哈希: {txHash}</p>
            <p>Token ID: {tokenId}</p>
          </div>
        )}
      </div>
    </div>
  )
}
