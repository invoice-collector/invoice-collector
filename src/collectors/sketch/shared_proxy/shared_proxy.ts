
import { SketchCollector } from '../../sketchCollector';

export class SharedProxyCollector extends SketchCollector {

    static CONFIG = {
        id: "shared_proxy",
        name: "Shared Proxy",
        description: "i18n.collectors.shared_proxy.description",
        version: "0",
        website: "https://sharedproxy.co/proxy-service-panel/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126634.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://sharedproxy.co/proxy-service-panel/login.php",
    }

    constructor() {
        super(SharedProxyCollector.CONFIG);
    }
}
