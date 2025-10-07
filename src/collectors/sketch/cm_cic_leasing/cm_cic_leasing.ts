
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CmCicLeasingCollector extends SketchCollector {

    static CONFIG = {
        id: "cm_cic_leasing",
        name: "CM CIC Leasing",
        description: "i18n.collectors.cm_cic_leasing.description",
        version: "0",
        website: "https://www.espaceclients.cmcic-leasing.fr/espaceclients/initMesContrats#horizontalTab3",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/670855.jpg",
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
        entryUrl: "https://www.espaceclients.cmcic-leasing.fr/espaceclients/initMesContrats#horizontalTab3",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CmCicLeasingCollector.CONFIG);
    }
}
