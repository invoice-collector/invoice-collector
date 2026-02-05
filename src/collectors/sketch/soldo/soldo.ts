
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SoldoCollector extends SketchCollector {

    static CONFIG = {
        id: "soldo",
        name: "Soldo",
        description: "i18n.collectors.soldo.description",
        version: "0",
        website: "https://manage.soldo.com/b/#/business/users/VIRTUAL_USER/GDHD5843-000003/118954/activity",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131137.jpg",
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
        loginUrl: "https://manage.soldo.com/b/#/business/users/VIRTUAL_USER/GDHD5843-000003/118954/activity",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SoldoCollector.CONFIG);
    }
}
