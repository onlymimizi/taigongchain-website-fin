import React, { useEffect, useState } from "react"
import axios from "axios"
import "./AuditLogs.css"

export default function AuditLogs() {
  const [logs, setLogs] = useState<any[]>([])

  useEffect(() => {
    axios.get("/api/admin/audit-logs")
      .then(res => setLogs(res.data.logs))
      .catch(err => console.error("获取日志失败", err))
  }, [])

  return (
    <div className="audit-container">
      <h2>验证操作日志</h2>
      <table>
        <thead>
          <tr>
            <th>时间</th>
            <th>操作者</th>
            <th>操作内容</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i}>
              <td>{new Date(log.timestamp).toLocaleString()}</td>
              <td>{log.operator}</td>
              <td>{log.action}</td>
              <td>{log.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
