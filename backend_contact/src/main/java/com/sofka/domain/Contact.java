package com.sofka.domain;

/**
 * @author Gustavo Molina <gusmol37@gmail.com>
 * @version 1.0.0 2022-06-30
 */


/**
 * Importación de librerías
 */

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@Entity
@Table(name="contact")
public class Contact implements Serializable{

	private static final long serialVersionUID = 1L;
	
	/**
	 * Atributos de las columnas de la tabla
	 */
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_contact")
	private Long id;
	
	@Column(name = "full_name")
	private String fullname;
	
	@Column(name = "phone")
	private String phone;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "birth_date")
	private String birthdate;

	@Column(name = "deleted")
	private String deleted = "false";

}
