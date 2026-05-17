# myRacing 实时比赛监控工具

针对「myRacing」微信小程序的实时比赛监控与策略分析工具。

## 目录结构

| 目录 | 说明 |
|------|------|
| `01-小程序源码/` | 反编译的小程序源代码 (`unpacked/`) 和原始/解密后的 wxapkg 包 |
| `02-逆向工具/` | wxapkg 解密、解包脚本（JS/Python/Go），syskey 分析工具 |
| `03-接口数据/` | API 抓取脚本、爬取的接口响应样例、抓包 HAR 文件 |
| `04-规则文档/` | 比赛秩序册（PDF + Markdown），PDF 转换脚本 |
| `05-后端服务/` | Express 后端：API 代理 + WebSocket 实时推送 + 进站/换人状态追踪 |
| `06-前端应用/` | React + Vite + Tailwind 前端：实时排名看板 + 单棒计时 + 进站倒计时 |

## 快速启动

### 一键启动（推荐）

双击根目录的 **`启动.bat`** 即可：
- 自动启动后端 (端口 `3001`) 和前端 (端口 `5173`)
- 首次运行会自动安装前端依赖
- 自动打开浏览器到 <http://localhost:5173>

停止服务：双击 **`停止.bat`**。

### 手动启动

```powershell
# 后端
cd 05-后端服务 ; node index.js

# 前端（新终端）
cd 06-前端应用 ; npm install ; npm run dev
```

## 关键信息

- **接口地址**：`POST https://kart.xkarting.com/ajax/wxapi.ashx`
- **签名校验**：`syskey` 不被服务端校验，可填任意值
- **核心 flag**：`get-result-realtime-race`（实时排名 + 圈速 + 差距）
- **圈速单位**：毫秒（如 `69541` 表示 `1:09.541`）
- **小程序 AppID**：`wxca87659badc84f9c`
