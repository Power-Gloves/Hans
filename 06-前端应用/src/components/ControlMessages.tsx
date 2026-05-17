interface Props {
  messages: { id: number; cont: string; c_time: string }[]
}

export default function ControlMessages({ messages }: Props) {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="font-semibold text-gray-300 mb-2">赛事控制消息</h3>
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-sm">暂无消息</p>
        ) : (
          messages.slice().reverse().map((msg) => (
            <div key={msg.id} className="text-sm border-l-2 border-yellow-500 pl-2">
              <p className="text-gray-200">{msg.cont}</p>
              <p className="text-xs text-gray-500">{msg.c_time}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
