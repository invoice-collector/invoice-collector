
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BexioCollector extends SketchCollector {

    static CONFIG = {
        id: "bexio",
        name: "Bexio",
        description: "i18n.collectors.bexio.description",
        version: "0",
        website: "https://my.bexio.com/simplesaml/module.php/core/loginuserpassorg.php?AuthState=_7af9878e1e9f1d0477514f49d4601cc44c3b1fa800%3Ahttp%3A%2F%2Fmy.bexio.com%2Fsimplesaml%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Deasysys%26cookieTime%3D1531493176",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/66514.jpg",
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
        entryUrl: "https://my.bexio.com/simplesaml/module.php/core/loginuserpassorg.php?AuthState=_7af9878e1e9f1d0477514f49d4601cc44c3b1fa800%3Ahttp%3A%2F%2Fmy.bexio.com%2Fsimplesaml%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Deasysys%26cookieTime%3D1531493176",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BexioCollector.CONFIG);
    }
}
