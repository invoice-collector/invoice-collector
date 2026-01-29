
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RenaultBankDirektCollector extends SketchCollector {

    static CONFIG = {
        id: "renault_bank_direkt",
        name: "Renault Bank direkt",
        description: "i18n.collectors.renault_bank_direkt.description",
        version: "0",
        website: "https://banking.renault-bank-direkt.de/services_auth/auth-ui/?v=228318655de606f7&client_id=fkp&redirect_uri=https:%2F%2Fbanking.renault-bank-direkt.de%2Fservices_cloud%2Fportal%2Fportal-oauth%2Flogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2130730.jpg",
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
        loginUrl: "https://banking.renault-bank-direkt.de/services_auth/auth-ui/?v=228318655de606f7&client_id=fkp&redirect_uri=https:%2F%2Fbanking.renault-bank-direkt.de%2Fservices_cloud%2Fportal%2Fportal-oauth%2Flogin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RenaultBankDirektCollector.CONFIG);
    }
}
