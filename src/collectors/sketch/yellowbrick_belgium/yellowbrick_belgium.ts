
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class YellowbrickBelgiumCollector extends SketchCollector {

    static CONFIG = {
        id: "yellowbrick_belgium",
        name: "yellowbrick Belgium",
        description: "i18n.collectors.yellowbrick_belgium.description",
        version: "0",
        website: "https://my.yellowbrick.be/MyYellowbrick/invoice/list?interval=1&searchField=Date&searchValue=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202969.jpg",
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
        loginUrl: "https://my.yellowbrick.be/MyYellowbrick/invoice/list?interval=1&searchField=Date&searchValue=",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(YellowbrickBelgiumCollector.CONFIG);
    }
}
