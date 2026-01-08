
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AkademieFurSteuerUndWirtschaftsrechtCollector extends SketchCollector {

    static CONFIG = {
        id: "akademie_fur_steuer_und_wirtschaftsrecht",
        name: "Akademie fur Steuer- und Wirtschaftsrecht",
        description: "i18n.collectors.akademie_fur_steuer_und_wirtschaftsrecht.description",
        version: "0",
        website: "https://www.akademie-stuw.de/eportal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/955984.jpg",
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
        loginUrl: "https://www.akademie-stuw.de/eportal",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AkademieFurSteuerUndWirtschaftsrechtCollector.CONFIG);
    }
}
