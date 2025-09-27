
import { SketchCollector } from '../../sketchCollector';

export class MutuelleInterialeCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_interiale",
        name: "Mutuelle Interiale",
        description: "i18n.collectors.mutuelle_interiale.description",
        version: "0",
        website: "https://mamutuelle.interiale.fr/espace-personnel/creer-mon-espace-personnel",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129545.jpg",
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
        entryUrl: "https://mamutuelle.interiale.fr/espace-personnel/creer-mon-espace-personnel",
    }

    constructor() {
        super(MutuelleInterialeCollector.CONFIG);
    }
}
