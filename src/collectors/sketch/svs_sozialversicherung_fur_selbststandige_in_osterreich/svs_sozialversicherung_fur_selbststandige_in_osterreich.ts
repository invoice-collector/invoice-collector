
import { SketchCollector } from '../../sketchCollector';

export class SvsSozialversicherungFurSelbststandigeInOsterreichCollector extends SketchCollector {

    static CONFIG = {
        id: "svs_sozialversicherung_fur_selbststandige_in_osterreich",
        name: "SVS Sozialversicherung fur Selbststandige in Osterreich",
        description: "i18n.collectors.svs_sozialversicherung_fur_selbststandige_in_osterreich.description",
        version: "0",
        website: "https://www.svs.at/sva-vorschreibung/views/beitragskonto_v2.xhtml?LO=4&contentid=10007.853115&portal=svsportal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777398.jpg",
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
        entryUrl: "https://www.svs.at/sva-vorschreibung/views/beitragskonto_v2.xhtml?LO=4&contentid=10007.853115&portal=svsportal",
    }

    constructor() {
        super(SvsSozialversicherungFurSelbststandigeInOsterreichCollector.CONFIG);
    }
}
