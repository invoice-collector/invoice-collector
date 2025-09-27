
import { SketchCollector } from '../../sketchCollector';

export class Bitrix24Collector extends SketchCollector {

    static CONFIG = {
        id: "bitrix24",
        name: "Bitrix24",
        description: "i18n.collectors.bitrix24.description",
        version: "0",
        website: "https://www.bitrix24.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6416.jpg",
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
        entryUrl: "https://www.bitrix24.com/",
    }

    constructor() {
        super(Bitrix24Collector.CONFIG);
    }
}
