
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GroupeArgusCollector extends SketchCollector {

    static CONFIG = {
        id: "groupe_argus",
        name: "Groupe Argus",
        description: "i18n.collectors.groupe_argus.description",
        version: "0",
        website: "https://factures.largus.fr/#!/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1374771.jpg",
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
        entryUrl: "https://factures.largus.fr/#!/documents",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GroupeArgusCollector.CONFIG);
    }
}
