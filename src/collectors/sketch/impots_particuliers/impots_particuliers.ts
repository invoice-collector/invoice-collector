
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ImpotsParticuliersCollector extends SketchCollector {

    static CONFIG = {
        id: "impots_particuliers",
        name: "Impots particuliers",
        description: "i18n.collectors.impots_particuliers.description",
        version: "0",
        website: "https://cfspart.impots.gouv.fr/LoginMDP?op=c",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102324.jpg",
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
        entryUrl: "https://cfspart.impots.gouv.fr/LoginMDP?op=c",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ImpotsParticuliersCollector.CONFIG);
    }
}
