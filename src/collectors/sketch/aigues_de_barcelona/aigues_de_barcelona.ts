
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AiguesDeBarcelonaCollector extends SketchCollector {

    static CONFIG = {
        id: "aigues_de_barcelona",
        name: "Aigues de Barcelona",
        description: "i18n.collectors.aigues_de_barcelona.description",
        version: "0",
        website: "https://www.aiguesdebarcelona.cat/oficinaenxarxa/ca/group/ofex/home?p_p_id=OFEX_area_privada_WAR_OFEX_portlets_generalportlet&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&_OFEX_area_privada_WAR_OFEX_portlets_generalpo",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/922860.jpg",
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
        entryUrl: "https://www.aiguesdebarcelona.cat/oficinaenxarxa/ca/group/ofex/home?p_p_id=OFEX_area_privada_WAR_OFEX_portlets_generalportlet&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&_OFEX_area_privada_WAR_OFEX_portlets_generalpo",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AiguesDeBarcelonaCollector.CONFIG);
    }
}
