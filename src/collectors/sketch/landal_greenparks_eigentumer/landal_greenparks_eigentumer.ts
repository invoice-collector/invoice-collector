
import { SketchCollector } from '../../sketchCollector';

export class LandalGreenparksEigentumerCollector extends SketchCollector {

    static CONFIG = {
        id: "landal_greenparks_eigentumer",
        name: "Landal Greenparks Eigentumer",
        description: "i18n.collectors.landal_greenparks_eigentumer.description",
        version: "0",
        website: "https://www.landaleigentuemer.de/template3.aspx?cp=huurafrekening&menu=eigenarenpers&mid=eigenarenpersfinancieelhuurafrekening",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2166366.jpg",
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
        entryUrl: "https://www.landaleigentuemer.de/template3.aspx?cp=huurafrekening&menu=eigenarenpers&mid=eigenarenpersfinancieelhuurafrekening",
    }

    constructor() {
        super(LandalGreenparksEigentumerCollector.CONFIG);
    }
}
