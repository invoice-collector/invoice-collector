
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleHarmonieRsiCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_harmonie_rsi",
        name: "Mutuelle Harmonie - RSI",
        description: "i18n.collectors.mutuelle_harmonie_rsi.description",
        version: "0",
        website: "https://www.harmonie-mutuelle.fr/web/professionnels-independants-et-tpe",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129093.jpg",
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
        entryUrl: "https://www.harmonie-mutuelle.fr/web/professionnels-independants-et-tpe",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleHarmonieRsiCollector.CONFIG);
    }
}
