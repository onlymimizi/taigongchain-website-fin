import React, { useState } from "react"
import { ethers } from "ethers"
import QRCode from "qrcode.react"
import "./SignAndQR.css"

export default function SignAndQR() {
  const [ipfsHash, setIpfsHash] = useState("")
  const [signature, setSignature] = useState("")
  const [address, setAddress] = useState("")

  const handleSign = async () => {
    if (!window.ethereum) return alert("请安装 MetaMask")
    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const userAddress = await signer.getAddress()
      const message = `VerifyNFT:${ipfsHash}`
      const sig = await signer.signMessage(message)
      setAddress(userAddress)
      setSignature(sig)
    } catch (err) {
      alert("签名失败")
    }
  }

  const qrData = JSON.stringify({ ipfsHash, signature })

  return (
    <div className="signqr-container">
      <h1>扫码签名生成器</h1>
      <input
        placeholder="输入证书 IPFS 哈希"
        value={ipfsHash}
        onChange={(e) => setIpfsHash(e.target.value)}
      />
      <button onClick={handleSign}>连接钱包并签名</button>

      {signature && (
        <div className="result-block">
          <p><b>地址：</b>{address}</p>
          <p><b>签名：</b>{signature.slice(0, 20)}...{signature.slice(-10)}</p>
          <QRCode value={qrData} size={200} />
        </div>
      )}
    </div>
  )
}
