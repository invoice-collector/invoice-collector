
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JournalMidiLibreCollector extends SketchCollector {

    static CONFIG = {
        id: "journal_midi_libre",
        name: "Journal MIDI LIBRE",
        description: "i18n.collectors.journal_midi_libre.description",
        version: "0",
        website: "https://abonnement.midilibre.fr/site/midilibrev2/default/fr/compte/factures.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1471230.jpg",
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
        loginUrl: "https://abonnement.midilibre.fr/site/midilibrev2/default/fr/compte/factures.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(JournalMidiLibreCollector.CONFIG);
    }
}
