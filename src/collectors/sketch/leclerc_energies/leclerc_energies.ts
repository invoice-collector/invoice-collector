
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LeclercEnergiesCollector extends SketchCollector {

    static CONFIG = {
        id: "leclerc_energies",
        name: "Leclerc energies",
        description: "i18n.collectors.leclerc_energies.description",
        version: "0",
        website: "https://www.energies.leclerc",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1090189.jpg",
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
        entryUrl: "https://www.energies.leclerc",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeclercEnergiesCollector.CONFIG);
    }
}
