
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BtHomeCollector extends SketchCollector {

    static CONFIG = {
        id: "bt_home",
        name: "BT Home",
        description: "i18n.collectors.bt_home.description",
        version: "0",
        website: "https://home.bt.com/login/loginform?TYPE=33554433&REALMOID=06-f1aca0f0-9277-1028-a2aa-843bdb4e0000&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$jaE9RZHjBubvgi6UkuSlm3S9U4%2f%2fhegw3cPiRzNtV%2fxpvcJIObGL7PMFGk1F%2fqs88fC1UwqZHelSgJpU668r0pZ3Na7N6zn9&TAR",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39806.jpg",
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
        loginUrl: "https://home.bt.com/login/loginform?TYPE=33554433&REALMOID=06-f1aca0f0-9277-1028-a2aa-843bdb4e0000&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=$SM$jaE9RZHjBubvgi6UkuSlm3S9U4%2f%2fhegw3cPiRzNtV%2fxpvcJIObGL7PMFGk1F%2fqs88fC1UwqZHelSgJpU668r0pZ3Na7N6zn9&TAR",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BtHomeCollector.CONFIG);
    }
}
