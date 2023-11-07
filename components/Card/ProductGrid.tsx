import { CATEGORY_DATA } from "@/constants/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProductGrid = ({
	onSelect,
}: {
	onSelect: (id: string) => void;
}) => {
	const data = CATEGORY_DATA;
	const row1 = data[0];
	const row2 = data.slice(1);

	const row1Click = () => onSelect(row1.id);

	return (
		<div className="lg:hidden flex flex-1 h-full">
			<div className="grid grid-rows-2 w-full overflow-hidden h-full gap-4">
				<Link href={row1.path} onClick={row1Click}>
					<div className="w-full h-full relative rounded-lg overflow-hidden">
						<Image
							className="object-cover"
							style={{ width: "100%" }}
							src={row1.imgUrl}
							alt={row1.name}
							sizes="500px, 500px"
							fill
						/>
						<div className="absolute h-full w-full flex justify-center items-center">
							<h1 className="p-2 px-5 text-lg bg-white rounded-lg text-primary">
								{row1.name}
							</h1>
						</div>
					</div>
				</Link>
				<div className="grid grid-cols-2 gap-4">
					{row2.map((item) => {
						const onItemClick = () => onSelect(item.id);
						console.log(item.id);
						return (
							<Link
								href={item.path}
								key={item.id}
								className="flex-1 relative rounded-lg overflow-hidden"
								onClick={onItemClick}
							>
								<Image
									className="object-cover"
									fill
									src={item.imgUrl}
									alt={item.name}
									sizes="500px, 500px"
								/>
								<div className="absolute h-full w-full flex justify-center items-center">
									<h1 className="p-2 px-5 text-lg bg-white rounded-lg text-primary">
										{item.name}
									</h1>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};
