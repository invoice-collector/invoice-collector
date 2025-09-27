
import { SketchCollector } from '../../sketchCollector';

export class YuccanleadCollector extends SketchCollector {

    static CONFIG = {
        id: "yuccanlead",
        name: "YuccanLead",
        description: "i18n.collectors.yuccanlead.description",
        version: "0",
        website: "https://www.yuccanlead.com/webapp/leads/pay/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445826.jpg",
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
        entryUrl: "https://www.yuccanlead.com/webapp/leads/pay/",
    }

    constructor() {
        super(YuccanleadCollector.CONFIG);
    }
}
