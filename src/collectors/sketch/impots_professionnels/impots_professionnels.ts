
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ImpotsProfessionnelsCollector extends SketchCollector {

    static CONFIG = {
        id: "impots_professionnels",
        name: "Impots professionnels",
        description: "i18n.collectors.impots_professionnels.description",
        version: "0",
        website: "https://cfspro.impots.gouv.fr/LoginAccess?op=c",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102326.jpg",
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
        entryUrl: "https://cfspro.impots.gouv.fr/LoginAccess?op=c",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ImpotsProfessionnelsCollector.CONFIG);
    }
}
