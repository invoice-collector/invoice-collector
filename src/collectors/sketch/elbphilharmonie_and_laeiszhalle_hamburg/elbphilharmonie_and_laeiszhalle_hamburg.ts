
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ElbphilharmonieAndLaeiszhalleHamburgCollector extends SketchCollector {

    static CONFIG = {
        id: "elbphilharmonie_and_laeiszhalle_hamburg",
        name: "ELBPHILHARMONIE & LAEISZHALLE HAMBURG",
        description: "i18n.collectors.elbphilharmonie_and_laeiszhalle_hamburg.description",
        version: "0",
        website: "https://shop.elbphilharmonie.de/de/meine-daten/#/my-orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1801073.jpg",
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
        loginUrl: "https://shop.elbphilharmonie.de/de/meine-daten/#/my-orders",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElbphilharmonieAndLaeiszhalleHamburgCollector.CONFIG);
    }
}
