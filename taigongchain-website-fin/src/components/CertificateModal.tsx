import React from 'react'

interface CertificateModalProps {
  onClose: () => void
  visible: boolean
  metadata: any
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  visible,
  onClose,
  metadata
}) => {
  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-dark p-6 rounded-lg shadow-lg max-w-lg w-full text-light">
        <h3 className="text-xl font-bold mb-4">
          🎉 恭喜！NFT 证书生成成功
        </h3>
        <p className="mb-2">名称: {metadata?.name}</p>
        <p className="mb-2">描述: {metadata?.description}</p>
        <p className="mb-2">图片: {metadata?.image}</p>
        <button
          className="mt-4 btn btn-success w-full"
          onClick={onClose}
        >
          关闭
        </button>
      </div>
    </div>
  )
}

export default CertificateModal
