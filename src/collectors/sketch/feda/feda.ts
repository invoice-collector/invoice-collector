
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FedaCollector extends SketchCollector {

    static CONFIG = {
        id: "feda",
        name: "FEDA",
        description: "i18n.collectors.feda.description",
        version: "0",
        website: "https://www.feda.ad/oficina-virtual/usuarisOv/editPublic",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2695828.jpg",
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
        loginUrl: "https://www.feda.ad/oficina-virtual/usuarisOv/editPublic",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FedaCollector.CONFIG);
    }
}
