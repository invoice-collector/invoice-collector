
import { SketchCollector } from '../../sketchCollector';

export class FlyeralarmCollector extends SketchCollector {

    static CONFIG = {
        id: "flyeralarm",
        name: "flyeralarm",
        description: "i18n.collectors.flyeralarm.description",
        version: "0",
        website: "http://www.flyeralarm.com/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2239.jpg",
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
        entryUrl: "http://www.flyeralarm.com/de",
    }

    constructor() {
        super(FlyeralarmCollector.CONFIG);
    }
}
