import Image from "next/image"
import { Shield, Gauge, Cloud, Bot, Code, Power, Globe, Server, Layers, Grid } from "lucide-react"
import PrintButton from "@/components/print-button"

export default function BrochurePage() {
  return (
    <>
      <PrintButton />
      <div className="print-container">
        {/* 封面 */}
        <section className="cover page-break-after">
          <div className="logo-container">
            <div className="logo">
              <div className="logo-icon"></div>
              <h1 className="logo-text">RuiQi WAF</h1>
            </div>
          </div>
          <h2 className="main-title">企业级Web应用防火墙</h2>
          <p className="tagline">新一代WAF技术 · 全面安全防护 · 高性能设计</p>
          <div className="cover-decoration"></div>
        </section>

        {/* 目录 */}
        <section className="toc page-break-after">
          <h2 className="section-title">目录</h2>
          <div className="toc-content">
            <div className="toc-item">
              <span className="toc-number">01</span>
              <span className="toc-text">产品概述</span>
              <span className="toc-dots"></span>
              <span className="toc-page">3</span>
            </div>
            <div className="toc-item">
              <span className="toc-number">02</span>
              <span className="toc-text">全面保护功能</span>
              <span className="toc-dots"></span>
              <span className="toc-page">4</span>
            </div>
            <div className="toc-item">
              <span className="toc-number">03</span>
              <span className="toc-text">先进架构</span>
              <span className="toc-dots"></span>
              <span className="toc-page">6</span>
            </div>
            <div className="toc-item">
              <span className="toc-number">04</span>
              <span className="toc-text">灵活部署</span>
              <span className="toc-dots"></span>
              <span className="toc-page">8</span>
            </div>
            <div className="toc-item">
              <span className="toc-number">05</span>
              <span className="toc-text">产品规格参数</span>
              <span className="toc-dots"></span>
              <span className="toc-page">9</span>
            </div>
          </div>
          <div className="toc-decoration"></div>
        </section>

        {/* 产品概述 */}
        <section className="overview page-break-after">
          <h2 className="section-title">产品概述</h2>
          <div className="section-content">
            <div className="text-content">
              <p className="lead-text">
                RuiQi WAF是一款企业级Web应用防火墙，利用HAProxy和Coraza提供的新一代WAF技术保护您的Web应用。
              </p>
              <p>
                防御OWASP Top 10威胁，提供高级安全保障，同时最小化性能影响。RuiQi
                WAF采用云原生设计，可在各种环境中灵活部署，为您的Web应用提供全方位保护。
              </p>
              <div className="key-points">
                <div className="key-point">
                  <div className="key-icon">
                    <Shield className="icon" />
                  </div>
                  <div className="key-text">全面安全防护</div>
                </div>
                <div className="key-point">
                  <div className="key-icon">
                    <Gauge className="icon" />
                  </div>
                  <div className="key-text">高性能低延迟</div>
                </div>
                <div className="key-point">
                  <div className="key-icon">
                    <Cloud className="icon" />
                  </div>
                  <div className="key-text">云原生架构</div>
                </div>
              </div>
            </div>
            <div className="image-content">
              <div className="dashboard-image">
                <Image
                  src="/placeholder-hhs7d.png"
                  alt="RuiQi WAF 仪表盘"
                  width={500}
                  height={300}
                  className="dashboard-img"
                />
              </div>
            </div>
          </div>
          <div className="page-footer">
            <div className="footer-line"></div>
            <div className="footer-content">
              <span>RuiQi WAF 企业级Web应用防火墙</span>
              <span>www.ruiqi-waf.com</span>
            </div>
          </div>
        </section>

        {/* 全面保护功能 - 第一页 */}
        <section className="protection page-break-after">
          <h2 className="section-title">全面保护功能</h2>
          <div className="section-subtitle">保护您Web应用的高级安全功能</div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Shield className="icon" />
              </div>
              <h3 className="feature-title">OWASP Top 10 防护</h3>
              <p className="feature-desc">全面防御注入攻击、XSS、CSRF和其他关键Web应用漏洞，并持续更新。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Gauge className="icon" />
              </div>
              <h3 className="feature-title">高性能</h3>
              <p className="feature-desc">优化架构，在标准硬件上延迟影响小于5ms，每秒处理10,000+请求。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Cloud className="icon" />
              </div>
              <h3 className="feature-title">云原生设计</h3>
              <p className="feature-desc">在Kubernetes、Docker和传统环境中无缝部署，支持水平扩展。</p>
            </div>
          </div>
          <div className="page-footer">
            <div className="footer-line"></div>
            <div className="footer-content">
              <span>RuiQi WAF 企业级Web应用防火墙</span>
              <span>www.ruiqi-waf.com</span>
            </div>
          </div>
        </section>

        {/* 全面保护功能 - 第二页 */}
        <section className="protection-2 page-break-after">
          <h2 className="section-title">全面保护功能</h2>
          <div className="section-subtitle">保护您Web应用的高级安全功能</div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Bot className="icon" />
              </div>
              <h3 className="feature-title">机器人防护</h3>
              <p className="feature-desc">高级行为分析，区分合法用户、良性机器人和恶意自动化程序。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Code className="icon" />
              </div>
              <h3 className="feature-title">API安全</h3>
              <p className="feature-desc">针对REST、GraphQL和SOAP API的专业保护，包括架构验证和异常检测。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Power className="icon" />
              </div>
              <h3 className="feature-title">虚拟补丁</h3>
              <p className="feature-desc">无需修改应用代码，即可立即防御零日漏洞。</p>
            </div>
          </div>
          <div className="page-footer">
            <div className="footer-line"></div>
            <div className="footer-content">
              <span>RuiQi WAF 企业级Web应用防火墙</span>
              <span>www.ruiqi-waf.com</span>
            </div>
          </div>
        </section>

        {/* 先进架构 - 第一页 */}
        <section className="architecture page-break-after">
          <h2 className="section-title">先进架构</h2>
          <div className="section-subtitle">结合HAProxy和Coraza WAF提供无与伦比的安全性</div>
          <div className="architecture-content">
            <div className="architecture-text">
              <p className="lead-text">
                RuiQi WAF采用多引擎融合架构，结合高性能代理能力与深度安全检查，实现最佳性能与安全性平衡。
              </p>
              <p>
                通过HAProxy的高性能负载均衡和Coraza WAF的深度安全检测，RuiQi WAF能够在保证性能的同时提供全面的安全防护。
              </p>
            </div>
            <div className="architecture-image">
              <Image
                src="/placeholder-80zjr.png"
                alt="RuiQi WAF 架构图"
                width={600}
                height={400}
                className="arch-img"
              />
            </div>
          </div>
          <div className="page-footer">
            <div className="footer-line"></div>
            <div className="footer-content">
              <span>RuiQi WAF 企业级Web应用防火墙</span>
              <span>www.ruiqi-waf.com</span>
            </div>
          </div>
        </section>

        {/* 先进架构 - 第二页 */}
        <section className="architecture-2 page-break-after">
          <h2 className="section-title">多引擎融合架构</h2>
          <div className="section-subtitle">RuiQi WAF利用精密架构，结合高性能代理能力与深度安全检查</div>
          <div className="engine-features">
            <div className="engine-feature">
              <div className="engine-icon">
                <Server className="icon" />
              </div>
              <div className="engine-content">
                <h3 className="engine-title">HAProxy前端层</h3>
                <p className="engine-desc">高性能HTTP/HTTPS代理，支持TLS 1.3，基本过滤，以及智能流量分发。</p>
              </div>
            </div>
            <div className="engine-feature">
              <div className="engine-icon">
                <Shield className="icon" />
              </div>
              <div className="engine-content">
                <h3 className="engine-title">Coraza WAF核心引擎</h3>
                <p className="engine-desc">新一代开源WAF引擎，兼容ModSecurity，支持OWASP CRS及自定义规则。</p>
              </div>
            </div>
            <div className="engine-feature">
              <div className="engine-icon">
                <Code className="icon" />
              </div>
              <div className="engine-content">
                <h3 className="engine-title">SPOE通信</h3>
                <p className="engine-desc">HAProxy与Coraza之间的高效通信协议，优化检测性能。</p>
              </div>
            </div>
          </div>
          <div className="page-footer">
            <div className="footer-line"></div>
            <div className="footer-content">
              <span>RuiQi WAF 企业级Web应用防火墙</span>
              <span>www.ruiqi-waf.com</span>
            </div>
          </div>
        </section>

        {/* 灵活部署 */}
        <section className="deployment page-break-after">
          <h2 className="section-title">灵活部署</h2>
          <div className="section-subtitle">简单、可扩展的架构，随处部署</div>
          <div className="deployment-grid">
            <div className="deployment-card">
              <div className="deployment-icon">
                <Globe className="icon" />
              </div>
              <h3 className="deployment-title">边缘部署</h3>
              <p className="deployment-desc">在网络边缘部署，作为抵御外部攻击的第一道防线。</p>
            </div>
            <div className="deployment-card">
              <div className="deployment-icon">
                <Server className="icon" />
              </div>
              <h3 className="deployment-title">应用前端</h3>
              <p className="deployment-desc">为应用服务器提供精确安全控制的直接保护。</p>
            </div>
            <div className="deployment-card">
              <div className="deployment-icon">
                <Layers className="icon" />
              </div>
              <h3 className="deployment-title">分层保护</h3>
              <p className="deployment-desc">边缘+应用前端双重保护，实现深度防御架构。</p>
            </div>
            <div className="deployment-card">
              <div className="deployment-icon">
                <Grid className="icon" />
              </div>
              <h3 className="deployment-title">服务网格</h3>
              <p className="deployment-desc">作为微服务安全组件，与Istio/Linkerd无缝集成。</p>
            </div>
          </div>
          <div className="page-footer">
            <div className="footer-line"></div>
            <div className="footer-content">
              <span>RuiQi WAF 企业级Web应用防火墙</span>
              <span>www.ruiqi-waf.com</span>
            </div>
          </div>
        </section>

        {/* 产品规格参数 */}
        <section className="specifications">
          <h2 className="section-title">产品规格参数</h2>
          <div className="section-subtitle">RuiQi WAF技术规格与性能参数</div>
          <div className="specs-table">
            <table>
              <thead>
                <tr>
                  <th>参数类别</th>
                  <th>规格详情</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>性能指标</td>
                  <td>
                    <ul>
                      <li>延迟影响：&lt;5ms</li>
                      <li>每秒请求处理：10,000+</li>
                      <li>并发连接：根据硬件配置可扩展</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>部署选项</td>
                  <td>
                    <ul>
                      <li>容器化部署（Docker/Kubernetes）</li>
                      <li>虚拟机部署</li>
                      <li>物理服务器部署</li>
                      <li>云平台部署</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>支持协议</td>
                  <td>
                    <ul>
                      <li>HTTP/HTTPS</li>
                      <li>WebSocket</li>
                      <li>gRPC</li>
                      <li>REST/GraphQL/SOAP API</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>安全功能</td>
                  <td>
                    <ul>
                      <li>OWASP Top 10防护</li>
                      <li>机器人行为分析</li>
                      <li>API安全验证</li>
                      <li>虚拟补丁</li>
                      <li>自定义规则支持</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>管理功能</td>
                  <td>
                    <ul>
                      <li>可视化控制面板</li>
                      <li>实时监控与告警</li>
                      <li>详细安全日志</li>
                      <li>安全事件分析</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="contact-info">
            <h3>联系我们</h3>
            <p>网站：www.ruiqi-waf.com</p>
            <p>邮箱：contact@ruiqi-waf.com</p>
            <p>电话：+86 123 4567 8910</p>
          </div>
          <div className="page-footer">
            <div className="footer-line"></div>
            <div className="footer-content">
              <span>RuiQi WAF 企业级Web应用防火墙</span>
              <span>www.ruiqi-waf.com</span>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
