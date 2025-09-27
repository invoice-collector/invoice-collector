
import { SketchCollector } from '../../sketchCollector';

export class VpsServerCollector extends SketchCollector {

    static CONFIG = {
        id: "vps_server",
        name: "VPS Server",
        description: "i18n.collectors.vps_server.description",
        version: "0",
        website: "https://service.vpsserver.com/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1961415.jpg",
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
        entryUrl: "https://service.vpsserver.com/invoices/",
    }

    constructor() {
        super(VpsServerCollector.CONFIG);
    }
}
