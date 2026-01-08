
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleIndustriePetroleCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_industrie_petrole",
        name: "Mutuelle Industrie Petrole",
        description: "i18n.collectors.mutuelle_industrie_petrole.description",
        version: "0",
        website: "https://secure.mutuelles.biz/-MIP-",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129073.jpg",
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
        loginUrl: "https://secure.mutuelles.biz/-MIP-",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleIndustriePetroleCollector.CONFIG);
    }
}
