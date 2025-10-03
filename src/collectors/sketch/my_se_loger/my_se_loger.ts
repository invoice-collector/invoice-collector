
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MySeLogerCollector extends SketchCollector {

    static CONFIG = {
        id: "my_se_loger",
        name: "My Se Loger",
        description: "i18n.collectors.my_se_loger.description",
        version: "0",
        website: "https://myselogerpro.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035266.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://myselogerpro.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MySeLogerCollector.CONFIG);
    }
}
