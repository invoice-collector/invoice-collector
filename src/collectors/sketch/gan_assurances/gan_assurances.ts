
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GanAssurancesCollector extends SketchCollector {

    static CONFIG = {
        id: "gan_assurances",
        name: "GAN Assurances",
        description: "i18n.collectors.gan_assurances.description",
        version: "0",
        website: "https://authentification.ganassurances.fr/cas/login?service=https%3A%2F%2Fespaceclient.ganassurances.fr%2Fwps%2Fmyportal%2FTableauDeBord%3Fidcr%3D98",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106538.jpg",
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
        entryUrl: "https://authentification.ganassurances.fr/cas/login?service=https%3A%2F%2Fespaceclient.ganassurances.fr%2Fwps%2Fmyportal%2FTableauDeBord%3Fidcr%3D98",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GanAssurancesCollector.CONFIG);
    }
}
