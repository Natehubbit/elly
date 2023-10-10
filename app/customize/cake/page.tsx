import Container from "@/components/Container";
import { ColorsForm } from "@/components/Form/Colors";
import CustomizePanel from "@/components/Panel/CutomizePanel";
import SideMenu from "@/components/SideMenu";
import { CUSTOMIZE_CAKE_SIDE_MENU } from "@/constants/ui";

const CustomCake = () => {
	return (
		<Container>
			<SideMenu options={CUSTOMIZE_CAKE_SIDE_MENU} />
			<CustomizePanel>
				<div className="px-[30%] w-full h-full flex flex-col">
					<ColorsForm />
				</div>
			</CustomizePanel>
		</Container>
	);
};

export default CustomCake;
