
import { SketchCollector } from '../../sketchCollector';

export class GroupamaContratsGroupeCollector extends SketchCollector {

    static CONFIG = {
        id: "groupama_contrats_groupe",
        name: "Groupama - Contrats groupe",
        description: "i18n.collectors.groupama_contrats_groupe.description",
        version: "0",
        website: "https://www.contrat-groupe-groupama.fr/lib/aspx/EspacePublic/homeErgoAlt.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106873.jpg",
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
        entryUrl: "https://www.contrat-groupe-groupama.fr/lib/aspx/EspacePublic/homeErgoAlt.aspx",
    }

    constructor() {
        super(GroupamaContratsGroupeCollector.CONFIG);
    }
}
