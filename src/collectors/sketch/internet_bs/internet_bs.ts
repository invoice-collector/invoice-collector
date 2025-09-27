
import { SketchCollector } from '../../sketchCollector';

export class InternetBsCollector extends SketchCollector {

    static CONFIG = {
        id: "internet_bs",
        name: "internet.bs",
        description: "i18n.collectors.internet_bs.description",
        version: "0",
        website: "https://internetbs.net/de/Domainregistrierung/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/44411.jpg",
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
        entryUrl: "https://internetbs.net/de/Domainregistrierung/login.html",
    }

    constructor() {
        super(InternetBsCollector.CONFIG);
    }
}
