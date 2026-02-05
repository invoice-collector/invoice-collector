
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MainovaPrivatkundenCollector extends SketchCollector {

    static CONFIG = {
        id: "mainova_privatkunden",
        name: "Mainova - Privatkunden",
        description: "i18n.collectors.mainova_privatkunden.description",
        version: "0",
        website: "https://www.mainova.de/onlineservice/privatkunden/kundennummer.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30542.jpg",
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
        loginUrl: "https://www.mainova.de/onlineservice/privatkunden/kundennummer.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MainovaPrivatkundenCollector.CONFIG);
    }
}
