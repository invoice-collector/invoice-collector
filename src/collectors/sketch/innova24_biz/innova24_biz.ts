
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Innova24BizCollector extends SketchCollector {

    static CONFIG = {
        id: "innova24_biz",
        name: "Innova24.biz",
        description: "i18n.collectors.innova24_biz.description",
        version: "0",
        website: "https://www.innova24.biz/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/611.jpg",
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
        entryUrl: "https://www.innova24.biz/Login.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Innova24BizCollector.CONFIG);
    }
}
