
import { SketchCollector } from '../../sketchCollector';

export class AtasCollector extends SketchCollector {

    static CONFIG = {
        id: "atas",
        name: "atas",
        description: "i18n.collectors.atas.description",
        version: "0",
        website: "https://my.atas.net/shop/plans",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2017565.jpg",
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
        entryUrl: "https://my.atas.net/shop/plans",
    }

    constructor() {
        super(AtasCollector.CONFIG);
    }
}
