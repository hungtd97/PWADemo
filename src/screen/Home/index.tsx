import React from 'react';
import "../../assets/css/style.scss";
import "../../assets/css/bootstrap.min.css";
import logo from '../../assets/image/logo.png'
import pwa from '../../assets/image/pwa.svg'
import android from '../../assets/image/android.gif'
import ios from '../../assets/image/ios.gif'
import serviceWorker from '../../assets/image/serviceWorker.png'
import sourceCode from '../../assets/image/sourceCode.png'
import cycle from '../../assets/image/cycle.png'
import register from '../../assets/image/register.png'
import registerServiceWorker from '../../assets/image/registerServiceWorker.png'
import consoleDebugger from '../../assets/image/consoleDebugger.png'
import { Controller, Scene } from 'react-scrollmagic';
//@ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
//@ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default class HomeScreen extends React.Component {

    navigate = () => {
        //@ts-ignore
        this.props.history.push('/employee')
    }

    render() {
        return (
            <div>
                <div>
                    <img src={logo} />
                </div>
                <div>
                    <div className="magic-container">
                        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }} >
                            <Scene pin>
                                <div className="panel head turqoise"><span>Progressive Web App</span></div>
                            </Scene>
                            <Scene pin>
                                <div className="panel first">
                                    <span>Progressive Web App</span>
                                    <span style={{ fontSize: 30, marginLeft: 10 }}>aka PWA</span>
                                    <img src={pwa} className="" />
                                    <div className="content">
                                        <span style={{ fontSize: 22, marginRight: '30%' }}>PWA là bản "nâng cấp" của web app khi có thể hoạt động offline trên nhiều thiết bị, cũng như được cài đặt như một ứng dụng thông thường</span>
                                        <table>
                                            <tr>
                                                <th>Tính năng</th>
                                                <th>Web Apps</th>
                                                <th>Progressive Web App</th>
                                                <th>Native Apps</th>
                                            </tr>
                                            <tr>
                                                <th>Offline</th>
                                                <th>NO</th>
                                                <th>YES</th>
                                                <th>YES</th>
                                            </tr>
                                            <tr>
                                                <th>App Stores</th>
                                                <th>NO</th>
                                                <th>NO</th>
                                                <th>YES</th>
                                            </tr>
                                            <tr>
                                                <th>Responsive</th>
                                                <th>YES</th>
                                                <th>YES</th>
                                                <th>YES</th>
                                            </tr>
                                            <tr>
                                                <th>Searchable</th>
                                                <th>YES</th>
                                                <th>YES</th>
                                                <th>NO</th>
                                            </tr>
                                            <tr>
                                                <th>Installable</th>
                                                <th>NO</th>
                                                <th>YES</th>
                                                <th>YES</th>
                                            </tr>
                                            <tr>
                                                <th>Fast updates</th>
                                                <th>YES</th>
                                                <th>YES</th>
                                                <th>NO</th>
                                            </tr>
                                        </table>
                                        <span style={{ fontSize: 22 }}>Tuy nhiên PWA có nhiều hạn chế trong việc call đến API phần cứng.</span>
                                    </div>
                                </div>
                            </Scene>
                            <Scene pin>
                                <div className="panel second">
                                    <span style={{ display: 'block' }}>Work perfectly without Network</span>
                                    <span style={{ fontSize: 22, marginRight: '30%' }}>PWA khởi chạy như một ứng dụng trên di động, vẫn hoạt động dù không kết nối internet</span>
                                    <div className="row px-0">
                                        <div className="col-sm-6">
                                            <img src={android} className="android-gif" />
                                        </div>
                                        <div className="col-sm-6">
                                            <img src={ios} className="ios-gif" />
                                        </div>
                                    </div>
                                </div>
                            </Scene>
                            <Scene pin >
                                <div className="panel third bordeaux">
                                    <span style={{ display: 'block' }}>How PWA Works</span>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <span className="my-4" style={{ display: 'block', fontSize: 22, marginRight: '30%' }}>Để tạo một PWA, chúng ta phải đăng ký (register) một service worker, Service worker sẽ làm nhiệm vụ chính giúp cache web app, sử dụng cache khi offline</span>

                                        </div>
                                        <div className="col-sm-9">
                                            <img src={sourceCode} style={{ display: 'block', width: '60%' }} />
                                            <img src={consoleDebugger} style={{ display: 'block', width: '60%' }} />
                                        </div>
                                    </div>
                                </div>
                            </Scene>
                            <Scene pin >
                                <div className="panel forth bordeaux pt-5">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <span className="my-4" style={{ display: 'block', fontSize: 22, marginRight: '30%' }}>*Service Worker là một background service chạy trên client hoạt động như là proxy giữa server và ứng dụng</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <img src={serviceWorker} />
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-sm-3">
                                            <span className="my-4" style={{ display: 'block', fontSize: 22, marginRight: '30%' }}>Đối với ReactJS hiện tại đã support sẵn PWA. Việc chuyển giữa web app thường và PWA chỉ cần thay đổi trong index.js sau khi tạo app từ cli npx create-react-app</span>
                                            <span className="my-4" style={{ display: 'block', fontSize: 22, marginRight: '30%', fontWeight: 'bold' }}>Tuy nhiên bạn vẫn có thể tạo SW của riêng mình</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <img src={register} />
                                        </div>
                                    </div>
                                </div>
                            </Scene>
                            <Scene pin >
                                <div className="panel fifth">
                                    <span style={{ display: 'block' }}>Create your own Service Worker</span>
                                    <div className="row pr-5">
                                        <div className="col-sm-3">
                                            <span className="my-4" style={{ display: 'block', fontSize: 22, marginRight: '30%' }}>Cách đăng ký với browser <br />(có hỗ trợ) 1 service worker </span>
                                        </div>
                                        <div className="col-sm-9">
                                            <img src={registerServiceWorker} style={{ display: 'block', width: '80%' }} />
                                        </div>
                                    </div>
                                </div>
                            </Scene>
                            <Scene pin >
                                <div className="panel forth pt-5">
                                    <div className="row pr-5">
                                        <div className="col-sm-5">
                                            <span className="my-4" style={{ display: 'block', fontSize: 22, marginRight: '30%' }}>Life Cycle của service worker<br />(Service worker's life cyle)  </span>
                                            <span className="my-4" style={{ display: 'block', fontSize: 22, marginRight: '30%' }}>- <b>Install:</b> Sự kiện ngay sau khi SW được đăng ký (register). Trong <b>Install</b>, chúng ta nên precache bằng cách list ra những URL file cần cache </span>
                                            <span className="my-4" style={{ display: 'block', fontSize: 22, marginRight: '30%' }}>- <b>Activate:</b> Sự kiện sau khi SW mới được install, sự kiện thường để xoá những cache cũ</span>
                                            <span className="my-4" style={{ display: 'block', fontSize: 22, marginRight: '30%' }}>- <b>Idle:</b> Sự kiện khi SW đang hoạt động bình thường</span>
                                            <span className="my-4" style={{ display: 'block', fontSize: 22, marginRight: '30%' }}>- <b>Fetch:</b> Sự kiện mỗi khi có fetch request</span>
                                        </div>
                                        <div className="col-sm-7">
                                            <img src={cycle} style={{ display: 'block', width: '80%' }} />
                                        </div>
                                    </div>
                                </div>
                            </Scene>
                            <Scene pin >
                                <div className="code-panel fifth pt-5" style={{ marginBottom: 400 }}>
                                    <div className="row pr-5">
                                        <div className="col-sm-3">
                                            <span className="my-4" style={{ display: 'block', fontSize: 22, marginRight: '30%', fontWeight: 'bold' }}>SW Example</span>
                                        </div>
                                        <div className="col-sm-9 background-white">
                                            <SyntaxHighlighter language="javascript" style={docco}>
                                                {`const staticAssets = [
    './',
    './styles.css',
    './app.js'
];

self.addEventListener('install', async event => {
    const cache = await caches.open('static-meme');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const {request} = event;
    const url = new URL(request.url);
    if(url.origin === location.origin) {
        event.respondWith(cacheData(request));
    } else {
        event.respondWith(networkFirst(request));
    }

});

async function cacheData(request) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || fetch(request);
}

async function networkFirst(request) {
    const cache = await caches.open('dynamic-meme');

    try {
        const response = await fetch(request);
        cache.put(request, response.clone());
        return response;
    } catch (error){
        return await cache.match(request);

    }

}`}
                                            </SyntaxHighlighter>
                                        </div>
                                    </div>
                                </div>
                            </Scene>
                            <Scene pin >
                                <div className="panel forth pt-5">
                                    <span style={{ display: 'block' }}>This is The End.</span>
                                </div>
                            </Scene>
                        </Controller>
                    </div>
                </div>
            </div >
        )
    }
}