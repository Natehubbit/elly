import Container from "@/components/Container";
import CakeInfoForm from "@/components/Form/CakeInfo";
import CustomizePanel from "@/components/Panel/CutomizePanel";
import { getMyColors } from "@/utils/helpers";

const CustomCake = async () => {
	const colors = await getMyColors();
	return (
		<Container>
			<CustomizePanel>
				<CakeInfoForm colors={colors} />
			</CustomizePanel>
		</Container>
	);
};

export default CustomCake;
