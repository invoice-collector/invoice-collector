
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleGanCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_gan",
        name: "Mutuelle Gan",
        description: "i18n.collectors.mutuelle_gan.description",
        version: "0",
        website: "https://authentification.ganassurances.fr/cas/login?service=https%3A%2F%2Fauthentification.ganassurances.fr%2Fcas%2Foauth2.0%2FcallbackAuthorize&client_id=ecli_ganass",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/128907.jpg",
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
        entryUrl: "https://authentification.ganassurances.fr/cas/login?service=https%3A%2F%2Fauthentification.ganassurances.fr%2Fcas%2Foauth2.0%2FcallbackAuthorize&client_id=ecli_ganass",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleGanCollector.CONFIG);
    }
}
