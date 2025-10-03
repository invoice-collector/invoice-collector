
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleViazimutCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_viazimut",
        name: "Mutuelle Viazimut",
        description: "i18n.collectors.mutuelle_viazimut.description",
        version: "0",
        website: "https://www.harmonie-mutuelle.fr/inscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130699.jpg",
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
        entryUrl: "https://www.harmonie-mutuelle.fr/inscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleViazimutCollector.CONFIG);
    }
}
