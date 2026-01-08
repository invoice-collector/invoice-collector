
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WestfalenCollector extends SketchCollector {

    static CONFIG = {
        id: "westfalen",
        name: "Westfalen",
        description: "i18n.collectors.westfalen.description",
        version: "0",
        website: "https://www.westfalen-services.eu/default.asp?rq_AppGuid=0435AFC26C6EDDE278F4A1D3522934C10219803F&rq_TargetPageGuid=0C26109FEC6632976B939BE6F38FBB8795DC9612&rq_Layout=Westfalen-AG_Register&rq_MenuGuid=A7EAA24A978E6962C3219CE355E91CCF57BCFBD8&rq_TemplateKe",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167020.jpg",
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
        loginUrl: "https://www.westfalen-services.eu/default.asp?rq_AppGuid=0435AFC26C6EDDE278F4A1D3522934C10219803F&rq_TargetPageGuid=0C26109FEC6632976B939BE6F38FBB8795DC9612&rq_Layout=Westfalen-AG_Register&rq_MenuGuid=A7EAA24A978E6962C3219CE355E91CCF57BCFBD8&rq_TemplateKe",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WestfalenCollector.CONFIG);
    }
}
