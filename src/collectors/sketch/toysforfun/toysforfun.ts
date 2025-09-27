
import { SketchCollector } from '../../sketchCollector';

export class ToysforfunCollector extends SketchCollector {

    static CONFIG = {
        id: "toysforfun",
        name: "ToysforFun",
        description: "i18n.collectors.toysforfun.description",
        version: "0",
        website: "https://www.toys-for-fun.com/de/customer/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2105971.jpg",
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
        entryUrl: "https://www.toys-for-fun.com/de/customer/account/",
    }

    constructor() {
        super(ToysforfunCollector.CONFIG);
    }
}
