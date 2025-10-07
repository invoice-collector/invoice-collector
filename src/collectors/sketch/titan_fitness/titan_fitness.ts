
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TitanFitnessCollector extends SketchCollector {

    static CONFIG = {
        id: "titan_fitness",
        name: "Titan Fitness",
        description: "i18n.collectors.titan_fitness.description",
        version: "0",
        website: "https://www.titan.fitness/account?registration=false&loginType=Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/446199.jpg",
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
        entryUrl: "https://www.titan.fitness/account?registration=false&loginType=Login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TitanFitnessCollector.CONFIG);
    }
}
