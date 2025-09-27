
import { SketchCollector } from '../../sketchCollector';

export class MutuelleRadianceCimutParticularCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_radiance_cimut_particular",
        name: "Mutuelle Radiance - CIMUT - Particular",
        description: "i18n.collectors.mutuelle_radiance_cimut_particular.description",
        version: "0",
        website: "http://www.radiance.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130498.jpg",
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
        entryUrl: "http://www.radiance.fr/",
    }

    constructor() {
        super(MutuelleRadianceCimutParticularCollector.CONFIG);
    }
}
